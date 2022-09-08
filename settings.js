/**
 * This is the default settings file provided by Node-RED.
 *
 * It can contain any valid JavaScript code that will get run when Node-RED
 * is started.
 *
 * Lines that start with // are commented out.
 * Each entry should be separated from the entries above and below by a comma ','
 *
 * For more information about individual settings, refer to the documentation:
 *    https://nodered.org/docs/user-guide/runtime/configuration
 *
 * The settings are split into the following sections:
 *  - Flow File and User Directory Settings
 *  - Security
 *  - Server Settings
 *  - Runtime Settings
 *  - Editor Settings
 *  - Node Settings
 *
 **/

 const {get_group_users} = require('./mygraphapi');

 // get_group_users().then((user_list) => {
 //     console.log(user_list);
 // });
 
module.exports = {


    /** To password protect the Node-RED editor and admin API, the following
     * property can be used. See http://nodered.org/docs/security.html for details.
     */
    adminAuth: {
       type: "credentials",
       users: async function() { //add async keyword
           // replace
           // users = [ 'user1@blabla.com', 'user2@blabla.com' ]
           //with
            let user_list =  await get_group_users();
            
            
            // rest of the code....
            console.log(user_list);
            return [{}]
         }
    },


}
