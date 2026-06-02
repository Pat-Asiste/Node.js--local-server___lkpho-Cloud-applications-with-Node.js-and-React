// Export a function named 'getDate' from the module
module.exports.getDate = function getDate() {
    // Get the current date and time in the timezone "Australia/Brisbane"
    let aestTime = new Date().toString();
    let hora = new Date().getHours();   //number : 24h-format
    return { aestTime, hora }; // Return the formatted date and time
};
