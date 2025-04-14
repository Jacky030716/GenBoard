const meetingRepository = require("../repositories/meeting_repository");

const meetingService = {
  createMeeting: async (data) => {
    return await meetingRepository.createMeeting(data);
  },

  getMeetingsByHost: async (uid) => {
    return await meetingRepository.getMeetingsByHost(uid);
  },

  getMeetingsByParticipant: async (uid) => {
    return await meetingRepository.getMeetingsByParticipant(uid);
  },
};

module.exports = meetingService;
