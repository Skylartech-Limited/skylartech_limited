export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({
        error: "Email is required",
      });
    }
    console.log("SERVER:", process.env.MAILCHIMP_SERVER);
    console.log("AUDIENCE:", process.env.MAILCHIMP_AUDIENCE_ID);
    console.log("API KEY EXISTS:", !!process.env.MAILCHIMP_API_KEY);
    const response = await fetch(
      `https://${process.env.MAILCHIMP_SERVER}.api.mailchimp.com/3.0/lists/${process.env.MAILCHIMP_AUDIENCE_ID}/members`,
      {
        method: "POST",
        headers: {
          Authorization:
            "Basic " +
            Buffer.from(`anystring:${process.env.MAILCHIMP_API_KEY}`).toString(
              "base64",
            ),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email_address: email,
          status: "subscribed",
        }),
      },
    );

    const data = await response.json();

    if (!response.ok) {
      console.log("Mailchimp Error:", data);

      return res.status(response.status).json(data);
    }

    return res.status(200).json({
      success: true,
      message: "Subscribed successfully!",
    });
  } catch (err) {
    console.error(err);

    return res.status(500).json({
      error: "Internal server error",
    });
  }
}
