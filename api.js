export const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI0ZmE4NWZhZi1hMjk4LTQ1YzEtODAwMi05NjJhZDUxZjgwN2QiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcwNDQ1NjU3MCwiZXhwIjoxNzM1OTkyNTcwfQ.m0nixtnJjoJwBIAGRALpxBOiUidJ9QrVgyf23ElP5TE";
// API call to create meeting
export const createMeeting = async ({ token }) => {
  const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
    method: "POST",
    headers: {
      authorization: `${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({}),
  });

  const { roomId } = await res.json();
  return roomId;
};