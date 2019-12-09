import fs from 'fs';

import chunks from '@/lib/chunks';
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


      const liquidVars = template.toLiquidVars(
        files.parse(inputFiles),
        chunks.memoiseChunks(stats.compilation.chunks),
      );

      fs.writeFileSync(
        `${output}/${filename}`,
        template.liquidTemplate(liquidVars, publicpath),
      );
    });
  }
}

export default LiquidManifestPlugin;
