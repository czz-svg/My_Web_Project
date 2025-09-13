import "./Contact.css"
export default function Contact() {
  return (
    <>
      <main className="contact-page">
        <h1>Contact</h1>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label>
            Your name
            <input type="text" placeholder="Nguyễn Văn A" required />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" required />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="enter message…"></textarea>
          </label>
          <button type="submit">Send</button>
        </form>
      </main>
    </>
  );
}
