const createItem = (req, res) => {
    console.log(req.body.title);
    return res. status(200). json({ message: "アイテムの作成"})
}

export default createItem