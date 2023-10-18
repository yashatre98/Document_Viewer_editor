const mysql = require('mysql2/promise')

// db configuration
const eventuallyAConnection = mysql.createConnection({
    host: 'localhost',
    user: 'YashAtre',
    password: 'Khandwa98@',
    database: 'Editor'
})

// DB fucntion and Query for Creating a new article.
async function addDocument(title, content) {
    const connection = await eventuallyAConnection
    // INSERT INTO courses (code, title, instructor) VALUES (?, ?, ?)
    const name = '); delete from courses; '
    console.log("hello", title, content)
    const results = await connection.execute(
        'INSERT INTO Articles (title, content, LastEdited) VALUES (?, ?, CURRENT_TIMESTAMP())',
        [title, content]
    )
    
}

async function updateDocument(article_id, title, content) {
    // SELECT * FROM courses WHERE id = ?
    const connection = await eventuallyAConnection
    const results = await connection.query(
        'update articles set title=?, content=?, lastEdited=CURRENT_TIMESTAMP() where id= ?',
        [title, content,article_id]
    )
}

async function getDocument(article_id) {
    // SELECT * FROM courses WHERE id = ?
    const connection = await eventuallyAConnection
    const results = await connection.query(
        'SELECT * FROM Articles where id= ?',
        [article_id]
    )
    return results[0]
}

async function deleteDocument(article_id) {
    // DELETE FROM courses WHERE id = ?
    const connection = await eventuallyAConnection
    await connection.query(
        'Delete from Articles  where id= ?',
        [article_id]
    )
    // const results = await connection.query(
    //     'SELECT * FROM Articles LIMIT ? OFFSET ?',
    //     [limit, offset]
    // )

}

async function getDocuments(offset, limit) {
    // SELECT * FROM courses
    const connection = await eventuallyAConnection
    const results = await connection.query(
        'SELECT * FROM Articles LIMIT ? OFFSET ?',
        [limit, offset]
    )
    return results[0]
}

module.exports = {
    addDocument,
    getDocument,
    getDocuments,
    updateDocument,
    deleteDocument
}