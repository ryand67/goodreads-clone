import connect from '../../../util/db';

export default async (req, res) => {
    const { db } = await connect();

    const result = await db.collection('bookList').insertOne({
    entry: {
        title: req.body.title,
        author: req.body.author
    }});

    res.json(result);
}