import moment from 'moment-timezone';

const DEFINE = {
    COMMON: {
        SYSTEM: 'SYSTEM',
    },

    dateNow: () => {
        return moment.tz(Date.now(), 'Asia/Seoul');
    },

    dateConverter: param => {
        return moment(param).format('YYYY-MM-DD');
    },
};

export default DEFINE;
