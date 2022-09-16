/**
 *
 * Asynchronously loads the component for Quote
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
