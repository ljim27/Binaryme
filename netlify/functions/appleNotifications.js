exports.handler = async (event) => {
    try {
        const body = JSON.parse(event.body);
        console.log("Received App Store Notification:", body);
        
        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Received successfully" }),
        };
    } catch (error) {
        console.error("Error processing App Store notification:", error);
        return {
            statusCode: 400,
            body: JSON.stringify({ error: "Invalid request" }),
        };
    }
};
