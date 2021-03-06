const styles = theme => ({
    buttons: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "10px",
        margin: "auto",
    },
    button: {
        width: "250px",
        margin: "10px",
        fontSize: "1.5em",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        "&:hover": {
            backgroundColor: theme.palette.primary.contrastText
        }
    },
    title: {
        textAlign: "center",
        fontSize: "3em",
        marginTop: "20vh",
        marginBottom : "25vh",
        color: theme.palette.primary.contrastText,
        fontFamily: theme.fonts.fancy
    },
    background: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "100vh",
        backgroundColor: theme.palette.primary.main
    },
    logout: {
        position: "absolute",
        right: "0",
        top: "0",
        width: "100px",
        margin: "10px",
        fontSize: "1.3em",
        color: theme.palette.primary.main,
        backgroundColor: theme.palette.primary.contrastText,
        textTransform: "capitalize",
        fontFamily: theme.fonts.simple,
        "&:hover": {
            backgroundColor: theme.palette.primary.contrastText
        }
    }
});

export default styles;
