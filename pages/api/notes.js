import { getSession } from "next-auth/react";
import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  const session = await getSession({ req });
  if (session) {
    const client = await clientPromise;
    const db = client.db("notes-next-db");
    const notesCol = await db.collection("notes");
    const user = await notesCol.findOne({ userEmail: session.user.email });
    if (!user) {
      notesCol.insertOne({
        userEmail: session.user.email,
        files: [
          {
            id: 1,
            title: "New title",
            subtext: "edit this",
            time: Date.now(),
          },
        ],
      });
    }
    if (req.method === "GET") {
      res.status(200).json(user.files);
    }
    if (req.method === "POST") {
      if (req.body.operation === "new note") {
        try {
          notesCol.updateOne(
            { userEmail: session.user.email },
            {
              $set: {
                files: [
                  ...user.files,
                  {
                    id: user.files.length + 1,
                    title: "New title",
                    subtext: "edit this",
                    time: Date.now(),
                  },
                ],
              },
            }
          );
        } catch (e) {
          console.log(e);
        }
      }
      // if (req.body.operation === "delete") {
      //   const files = user.files;
      //   try {
      //     notesCol.updateOne(
      //       { userEmail: session.user.email },
      //       {
      //         $set: {
      //           files: { $pull: { id: req.body.id } },
      //         },
      //       }
      //     );
      //   } catch (e) {
      //     console.log(e);
      //   }
      // }
      res.status(200).end();
    }
  } else {
    res.status(401);
  }
}
