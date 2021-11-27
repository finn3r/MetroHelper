import React from 'react';
import SanktPetersburg from "./Schemes/Sankt_Petersburg";

interface GetSchemeProps {
    city: string
}

const GetScheme: React.FC<GetSchemeProps> = ({city}) => {
    switch (city) {
        case "Санкт-Петербург": {
            return (<SanktPetersburg/>);
        }
        default: {
            return null;
        }
    }
};

export default GetScheme;