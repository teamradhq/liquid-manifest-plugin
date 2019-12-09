import * as liquid from '@/lib/liquid';

import comment from '%/lib/liquid/comment.mock';
import variable from '%/lib/liquid/variable.mock';
import variableName from '%/lib/liquid/variableName.mock';

liquid.default = {
  comment: comment.default,
  variable: variable.default,
  variableName: variableName.default,
};

export default liquid;
