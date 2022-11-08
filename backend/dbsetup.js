const connection = require('./db');

//////////////////////////////////////////////////////
// SETUP DB
//////////////////////////////////////////////////////
const CREATE_TABLE_MESSAGE_SQL = `
    CREATE TABLE message (
        messageId INT NOT NULL AUTO_INCREMENT,
        message TEXT NOT NULL,
        userId INT NOT NULL,
        PRIMARY KEY (messageId)
    );
`;

connection.promise().query(
    CREATE_TABLE_MESSAGE_SQL
)
.then((response) => {
    console.log(`Tables created`);
})
.catch((error) => {
    console.log(error);
});