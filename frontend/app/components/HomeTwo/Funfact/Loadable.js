/**
 *
 * Asynchronously loads the component for Funfact
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
