"use server"

export async function getParticularUserInfo(id: number) {
    const response = await fetch("http://localhost:3000/api/getParticularUserInfo", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({userid: id}),
    });
    const rett = await response.json();
    return rett.UserInfo?.["FirstName"] + " " + rett.UserInfo?.["LastName"]
}