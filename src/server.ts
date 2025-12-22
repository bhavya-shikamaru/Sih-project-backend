import express from 'express';




const app = express();

const PORT= process.env.PORT;
app.get(
    '/api/v1/health',
    (request, response) => {
        response
            .status(200)
            .json({
                status: 'OK',
            });
    }
)

app.listen(
    PORT,
    ()=> {
        console.log(`Server has started on port: ${PORT}`);
    }
);

