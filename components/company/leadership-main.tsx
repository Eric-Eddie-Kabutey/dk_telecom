'use client';
import Typography from '@/components/shared/typography';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import BoardMembers from './board-members';
import ManagementMembers from './management-members';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs-insights';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.6,
      }
    }
  };
  
  const itemVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };
  
  const tabContentVariants = {
    hidden: { scale: 0.98, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number]
      }
    }
  };

function LeadershipMain() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div 
      className='w-full py-20 bg-[#F4F4F4]'
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
        <motion.div 
          className='pops w-[500px] flex flex-col gap-4'
          variants={itemVariants}
        >
          <Typography
            typo="header-4-medium"
            className='text-gray-700'
          >
            LeadershipMain & Executive Management
          </Typography>
          <Typography
            className='!font-light text-gray-700'
          >
            Meet the experts behind our success—a diverse team of IT professionals dedicated to delivering the best 
            for our clients.
          </Typography>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <Tabs
            defaultValue="management-members"
            className='pt-8'
          >
            <motion.div variants={itemVariants} className='pb-6 border-b'>
              <TabsList >
                <TabsTrigger value="board-members">Board</TabsTrigger>
                <TabsTrigger value="management-members">Management</TabsTrigger>
              </TabsList>
            </motion.div>
            
            <motion.div variants={tabContentVariants}>
              <TabsContent value="management-members">
                <BoardMembers />
              </TabsContent>
            </motion.div>
            
            <motion.div variants={tabContentVariants}>
              <TabsContent value="board-members">
                <ManagementMembers />
              </TabsContent>
            </motion.div>
          </Tabs>
        </motion.div>
      </section>
    </motion.div>
  )
}

export default LeadershipMain;