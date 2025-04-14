const Meeting = require("../models/meeting_model");

const meetingService = {
  createMeeting: async (data) => {
    const newMeeting = new Meeting(data);
    return await newMeeting.save();
  },

  getMeetingsByHost: async (uid) => {
    return await Meeting.find({ host: uid });
  },

  getMeetingsByParticipant: async (uid) => {
    return await Meeting.find({ participants: uid });
  },
};

module.exports = meetingService;
