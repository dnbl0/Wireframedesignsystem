import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from '../../imports/svg-iko0xihcpl';

interface AccordionItemProps {
  title: string;
  content: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  content,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div
      className="relative w-full border-b border-solid"
      style={{
        borderColor: 'var(--muted-foreground)',
      }}
    >
      {/* Heading Box */}
      <button
        onClick={onToggle}
        className="relative w-full hover:bg-muted/30 transition-colors"
        style={{
          fontFamily: 'var(--font-family-nobel)',
        }}
      >
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center px-[16px] py-[24px] relative w-full">
            <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-center min-h-px min-w-px relative">
              <div
                className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px text-left"
                style={{
                  fontFamily: 'var(--font-family-nobel)',
                  fontSize: 'var(--text-subtitle)',
                  fontWeight: 'var(--font-weight-book)',
                  color: 'var(--foreground)',
                  lineHeight: '1.5',
                }}
              >
                <p>{title}</p>
              </div>
              <motion.div
                className="relative shrink-0 size-[16px]"
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                <div className="absolute flex inset-0 items-center justify-center">
                  <svg
                    className="block w-[24px] h-[15px]"
                    fill="none"
                    preserveAspectRatio="none"
                    viewBox="0 0 11.8284 7.32843"
                  >
                    <path
                      d={svgPaths.p36934071}
                      style={{ fill: 'var(--foreground)' }}
                    />
                  </svg>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </button>

      {/* Content Box */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="relative w-full">
              <div className="flex flex-row items-center justify-center size-full">
                <div className="content-stretch flex items-center justify-center pb-[24px] px-[16px] relative w-full">
                  <div
                    className="flex flex-[1_0_0] flex-col justify-center min-h-px min-w-px"
                    style={{
                      fontFamily: 'var(--font-family-nobel)',
                      fontSize: 'var(--text-body)',
                      fontWeight: 'var(--font-weight-book)',
                      color: 'var(--foreground)',
                      lineHeight: '1.5',
                    }}
                  >
                    <p>{content}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

interface AccordionProps {
  items: Array<{
    id: string;
    title: string;
    content: string;
  }>;
  allowMultiple?: boolean;
  defaultOpenIds?: string[];
}

export const Accordion: React.FC<AccordionProps> = ({
  items,
  allowMultiple = false,
  defaultOpenIds = [],
}) => {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenIds);

  const toggleItem = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div
      className="w-full border-t border-solid"
      style={{
        borderColor: 'var(--muted-foreground)',
        borderRadius: 'var(--radius-card)',
        backgroundColor: 'var(--card)',
      }}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.id}
          title={item.title}
          content={item.content}
          isOpen={openIds.includes(item.id)}
          onToggle={() => toggleItem(item.id)}
        />
      ))}
    </div>
  );
};
