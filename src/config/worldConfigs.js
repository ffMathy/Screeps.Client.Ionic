/**
 * Created by vedi on 07/04/2017.
 */

import '@screeps/renderer-metadata';

export default {
    ATTACK_PENETRATION: 10,
    CELL_SIZE: 100,
    RENDER_SIZE: {
        width: 2048,
        height: 2048,
    },
    VIEW_BOX: 5000,
    BADGE_URL: 'https://screeps.com/api/user/badge-svg?username=%1',
    metadata: window.RENDERER_METADATA,
    gameData: {
        player: '561e4d4645f3f7244a7622e8',
        showMyNames: {
            spawns: true,
            creeps: true,
        },
        showEnemyNames: {
            spawns: true,
            creeps: true,
        },
        showFlagsNames: true,
        showCreepSpeech: true,
        swampTexture: 'animated',
    },
    lighting: 'normal',
    forceCanvas: false,
};
