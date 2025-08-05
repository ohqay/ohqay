import React from 'react';
import { PageWrapper } from '@/components/common';
import { Container } from '@/components/common';
import { CardDeck } from '@/components/cards/CardDeck';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  return (
    <PageWrapper>
      <Container>
        <div className="py-16 md:py-24 relative z-10">
          {/* Centered branding */}
          <motion.div
            className="text-center mb-24 md:mb-32"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl font-medium text-foreground-tertiary mb-2">
              ohqay
            </h1>
            <p className="text-lg md:text-xl text-foreground-tertiary">
              creative services
            </p>
          </motion.div>
          
          <CardDeck />
        </div>
      </Container>
    </PageWrapper>
  );
};