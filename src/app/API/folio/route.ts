import { NextResponse } from "next/server";
import Database from 'better-sqlite3';

const db = new Database('database.db')

const createTable = () => {
    const sql = `
        CREATE TABLE IF NOT EXISTS Cotizacion (
            id         INTEGER PRIMARY KEY AUTOINCREMENT,
            usuario    TEXT NOT NULL
        )
    `
    db.prepare(sql).run()
}
createTable()

// GET PARA OBTENER ULTIMO ID
export async function GET() {
    try {
        const maxId = db.prepare('SELECT MAX(id) FROM Cotizacion')
        return NextResponse.json(maxId)
    } catch (error) {
        console.error('Error en GET: ', error)
        return NextResponse.json({ error: 'Error al obtener ultimo Id' }, { status: 500 })
    }
}


export async function POST(req: Request) {
    try {
        const { nombre } = await req.json()
        if (!nombre) {
            return NextResponse.json({ error: 'Usuario requerido' }, { status: 400 })
        }

        const result = db.prepare(`INSERT INTO Cotizacion (usuario) VALUES (?)`).run(nombre)
        return NextResponse.json({ id: result.lastInsertRowid})

    } catch (error) {
        console.error('Error en POST: ', error)
        return NextResponse.json({error: 'Error al insertar el usuario'}, {status: 500})
    }

}