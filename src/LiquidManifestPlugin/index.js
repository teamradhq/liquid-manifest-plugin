import fs from 'fs';

import files from '@/lib/files';
import template from '@/lib/template';

/**
 * Creates a liquid template that that defines variables from our asset
 * manifest files. This will allow us to utilise dynamic chunk names.
 */
class LiquidManifestPlugin {
  constructor(options) {
    this.options = options;
  }

  apply(compiler) {
    const {
      output,
      publicpath = '',
      filename = 'manifest.liqud',
      files: inputFiles = [],
    } = this.options;

    compiler.hooks.done.tap('LiquidManifestPlugin', (stats) => {
      if (!fs.existsSync(output)) {
        console.log("Output path doesn't exist");
      }

      fs.writeFileSync(
        `${output}/${filename}`,
        template.render(files.parse(inputFiles, files.memoiseChunks(stats.compilation.chunks)), publicpath),
      );
    });
  }
}

export default LiquidManifestPlugin;
