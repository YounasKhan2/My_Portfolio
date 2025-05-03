// File: src/components/ui/CodeBackground.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const CodeSnippets = [
  {
    language: 'javascript',
    code: `const Portfolio = () => {
  const [isAwesome, setAwesome] = useState(true);
  return <div>💻 Coding Magic ✨</div>;
};`,
  },
  {
    language: 'python',
    code: `def create_magic():
    while True:
        code = write_awesome_code()
        deploy(code)
        ☕️ coffee.drink()`,
  },
  {
    language: 'react',
    code: `<Motion
  animate={{ scale: [1, 1.2, 1] }}
  transition={{ duration: 2 }}
>
  <div>✨ Animations</div>
</Motion>`,
  },
  {
    language: 'css',
    code: `.developer {
  skills: infinite;
  coffee-level: high;
  bugs: 0;
  creativity: unlimited;
}`,
  }
];

const CodeBlock = ({ code, language, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: [0.1, 0.3, 0.1],
        y: [-10, 10, -10],
        x: [-5, 5, -5],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: index * 2,
        ease: "linear"
      }}
      className={`
        absolute text-sm font-mono
        bg-gray-800/30 dark:bg-gray-800/40
        backdrop-blur-sm rounded-lg p-4
        text-gray-300 dark:text-gray-400
        border border-gray-700/30
        shadow-xl
        whitespace-pre
        overflow-hidden
      `}
      style={{
        top: `${15 + (index * 25)}%`,
        left: `${10 + (index * 20)}%`,
        transform: `rotate(${-5 + (index * 2)}deg)`,
        maxWidth: '300px'
      }}
    >
      <div className="flex items-center gap-1 mb-2">
        <div className="w-2 h-2 rounded-full bg-red-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
      </div>
      {code}
    </motion.div>
  );
};

const AnimatedCodeBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {CodeSnippets.map((snippet, index) => (
        <CodeBlock
          key={index}
          code={snippet.code}
          language={snippet.language}
          index={index}
        />
      ))}
    </div>
  );
};

export default AnimatedCodeBackground;