import Image from "next/image";

const steps = [
  {
    image: "/images/step1.jpg",
    step: "Step 1",
    text: "新規投稿ページで合言葉と一緒に画像を投稿しましょう。",
  },
  {
    image: "/images/step2.jpg",
    step: "Step 2",
    text: "検索ページで合言葉を検索して、画像を表示しましょう。",
  },
];

const HowToUse = () => {
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
        How to use
      </h2>
      <div className="mt-4 flex flex-col md:flex-row justify-center items-center gap-8">
        {steps.map(({ image, step, text }) => (
          <div key={step} className="flex flex-col items-center max-w-sm">
            <div className="bg-white/30 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105">
              <Image
                src={image}
                width={640}
                height={480}
                alt={step}
                className="w-full h-full object-cover"
              />
            </div>
            <dt className="text-xl font-semibold text-gray-700 dark:text-gray-300 mt-6">
              {step}
            </dt>
            <dd className="mt-2 text-gray-900 dark:text-white text-center px-4 leading-relaxed">
              {text}
            </dd>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowToUse;
