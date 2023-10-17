"use client";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  console.log("Error is ", error);

  return (
    <html>
      <body>
        <h2>GLOBALLY Something went wrong!</h2>
        <pre>{JSON.stringify(error, null, 2)}</pre>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  );
}
