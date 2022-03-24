import cors from "cors";

const corsOptions = {
    origin: "http://localhost:3006",
    optionsSuccessStatus: 200,
};

export default cors(corsOptions);
