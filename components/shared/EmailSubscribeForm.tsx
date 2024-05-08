"use client";
type Props = {};

const EmailSubscribeForm = ({}: Props) => {
  const handleSumit = (ev: any) => {
    ev.preventDefault();
    console.log("email to subscribe:", ev.target[0].value);
  };
  return (
    <form
      method="post"
      onSubmit={(ev) => handleSumit(ev)}
      className="md:w-full w-[90%] mx-auto mf:flex-row flex-col gap-4 mf:my-8 flex "
    >
      <input
        type="email"
        placeholder="enter your email"
        className="bg-glass/10 md:p-2 py-3 px-2 flex-grow rounded-lg"
        required
        name="email"
      />
      <button
        className="bg-secondry  px-5 md:py-2 py-3 rounded-full"
        type="submit"
      >
        subscribe
      </button>
    </form>
  );
};

export default EmailSubscribeForm;
