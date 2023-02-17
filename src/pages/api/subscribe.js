import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER,
});

const Subscribe = async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: email,
      status: 'subscribed',
    });
    return res.status(201).json({ error: '' });
  } catch (error) {
    if (error.message === 'Bad Request') {
      return res.status(200).json({ error: '' });
    }
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default Subscribe