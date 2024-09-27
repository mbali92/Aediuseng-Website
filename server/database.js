import mysql from 'mysql2';
import dotenv from 'dotenv'
dotenv.config()

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password:process.env.MYSQL_PASSWORD,
    database:process.env.MYSQL_DATABASE
}).promise()


export async function getHomepage(){
    const [rows] = await connection.query(`
        SELECT 
        s.section_name, 
        ss.subsection_id,
        ss.subsection_name, 
        ss.subsection_content 
        FROM 
        pages p 
        LEFT JOIN sections s ON p.page_id = s.page_id 
        LEFT JOIN subsections ss ON s.section_id = ss.section_id 
        WHERE 
        p.page_id = 1;
    `  
    )
    return rows
}

export async function updateContent(subsection_id,subsection_content){
  
    const sql = 'UPDATE subsections SET subsection_content = ? WHERE subsection_id = ?';
    try {
      await connection.query(sql, [subsection_content, subsection_id]);
      return "success";
    } catch (err) {
      console.error('Error updating data:', err);
      return err;
    }
}
export async function updateTitle(subsection_id,subsection_name){
  
  const sql = 'UPDATE subsections SET subsection_name = ? WHERE subsection_id = ?';
  try {
    await connection.query(sql, [subsection_name, subsection_id]);
    return "success";
  } catch (err) {
    console.error('Error updating data:', err);
    return err;
  }
}




