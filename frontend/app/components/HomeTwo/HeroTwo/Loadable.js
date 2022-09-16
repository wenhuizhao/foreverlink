/**
 *
 * Asynchronously loads the component for HeroTwo
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
