// req là một bản sao của HTMLOutputElement.incommingMessage 
// res là một bản sao của http.ServerResponse
export default (req, res) => {
    res.status(200).json({ text: 'Hello' })
}