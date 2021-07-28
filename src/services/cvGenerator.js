exports.getAll = async (req, res, next) => {
    try {
        const message = 'I can generate your CV!';
        const { users } = req;

        /**
         * TODO:
         * - Generate PDF documents from an array of users
         * - Get ZIP file from PDF documents
        */
    
        return res.status(200).json({ data: message });
      } catch (e) {
        next(e);
      }
}