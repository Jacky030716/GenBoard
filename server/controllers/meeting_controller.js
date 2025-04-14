const meetingService = require("../services/meeting_service");

const meetingController = {
    createMeeting: async (req, res) => {
        const { date, time, title, host, participants, purpose } = req.body;
        try {
            const newMeeting = await meetingService.createMeeting({
                date,
                time,
                title,
                host,
                participants,
                purpose
            });
            res.status(201).json(newMeeting);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getHostMeeting: async (req, res) => {
        const { uid } = req.params;
        try {
            const response = await meetingService.getMeetingsByHost(uid);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    getParticipantMeeting: async (req, res) => {
        const { uid } = req.params;
        try {
            const response = await meetingService.getMeetingsByParticipant(uid);
            res.status(200).json(response);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
};


module.exports = meetingController;