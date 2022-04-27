/** FUNCTIONS */

/**
 * @param {string} type - specifies which date to get, i.e. check out dates are calculated one day ahead of checkin
 * @returns - ISO date string
 */
const getTomorrowsDate = (type) => {
    const today = new Date();
    
    if (type === 'checkOut') {
        today.setDate(today.getDate() + 2);
    }
    else {
        today.setDate(today.getDate() + 1);
    }

    return today.toISOString().split('T')[0];
}

module.exports = {
    getTomorrowsDate
}