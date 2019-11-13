import moment from 'moment-timezone';

const DEFINE = {
    COMMON: {
        SYSTEM: 'SYSTEM',
    },

    dateNow: () => {
        return moment.tz(Date.now(), 'Asia/Seoul');
    },
};

export default DEFINE;
