export default function BlurredCard() {
  return (
    <div className="h-screen flex items-center justify-center bg-[url('https://picsum.photos/800')] bg-cover">
      <div className="backdrop-blur-md bg-white/30 border border-white/40 shadow-lg rounded-2xl p-6 w-80">
        <h2 className="text-xl font-semibold text-white">Blurred Card</h2>
        <p className="text-white/80">
          This card has a glassmorphism effect using Tailwind.
        </p>
      </div>
    </div>
  );
}