import {styled} from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CustomField = styled(TextField)({
    borderRadius: '10px',
    'input': {
        fontWeight: '500',
        fontSize: '1em',
        '&::placeholder': {
            fontWeight: '400',
            color: 'black',
            opacity: 0.6
        },
    },

    '& .MuiInputBase-input': {
        height: '1.8vh'
    },

    '& .MuiAutocomplete-clearIndicator': {
        opacity: 0,
        backgroundColor: 'rgba(0, 0, 0, 0)',
    },

    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderRadius: '10px',
            border: '1px solid rgba(0, 0, 0, 0)',
        },
        '&:hover fieldset': {
            borderRadius: '10px',
            border: '1px solid rgba(0, 0, 0, 0.25)',
            transition: '0.2s',
        },
        '&:hover .MuiAutocomplete-clearIndicator': {
            opacity: 0.4,
            transition: '0.2s',
            '&:hover': {
                opacity: 0.75,
                transition: '0.2s',
                backgroundColor: 'rgba(0, 0, 0, 0)',
            },
        },
        '&.Mui-focused .MuiAutocomplete-clearIndicator': {
            opacity: 0.401,
            transition: '0s',
        },
        '&.Mui-focused fieldset': {
            borderRadius: '10px',
            border: '1px solid rgba(0, 114, 255, 0.5)',
            transition: '0s',
        },
    },
});

export default CustomField;