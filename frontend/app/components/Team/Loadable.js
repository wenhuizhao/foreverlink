/**
 *
 * Asynchronously loads the component for Team
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
