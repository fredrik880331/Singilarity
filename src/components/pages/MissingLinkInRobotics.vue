<template>
<div class="wrapper">
<page :data = "data" ></page>
  
  <div class="container ">   
    <div class="col-md-2"></div>
      <div class="col-md-8 ">

        <div class="panel panel-default">
            <div class="panel-body">
                <div class="pageTitle">The missing link in robotics</div>
                
                <div class="pageIntro">In this article we search for <i>“the missing link in robotics”</i>. We state that this is the field that is 
                holding back the robot development from becoming truly intelligent. We look at what defines a robot 
                and the main robotic architecture control systems. In the end we will find what is holding the robotic development back. </div>
                
                <div class="sectionTitle">Why are there no intelligent robots?</div>     
                <p>We are going to try to answer this fundamental question: <i>“Why are there no intelligent robots?”.</i> The difficulty 
                to answer this question lies in complexity of the robotic field. There have existed programmable robots for over 
                60 years. Ever sins George Devol’s first successful attempt. And still there doesn’t exist robots sophisticated 
                enough to be called a robot, in the true sense of the word i.e.  Robot or <i>“robota”</i> that literally means forced labour.
                This implies that it should be able to free man from all unwanted physical labour.</p>
           
                <p>Every year new people starts a career in robotics. The progress is despite this very slow. One reason to this is that robotics 
                incorporates many different technologies and they all need to work together like a links in a chain, for the robot to work. 
                Because of this we are going to refer to each technology as a link. We will then evaluate each technology to try to find out which 
                link is missing for robots to take there next step on their evolutionary ladder.</p>

                <p>We will not only look at the parts that make up a robot. We will also look at what a robot is. We will look at what defines a robot 
                and what kinds of architectures are used. If we don’t know how to define a robot correctly, it doesn’t matter that all the technologies 
                used works perfectly. It still won’t work.</p>
                
                <div class="sectionTitle">What's a robot?</div>
                <p>There is no single or correct definition of a robot. RIA (Robot Institute of America) use this definition: <i>"A reprogrammable, multifunctional 
                manipulator designed to move material, parts, tools, or specialized devices through various programmed functions for the performance of a 
                variety of tasks."</i></p>
                <p>Robots as defined by the RIA already exist. Examples of these are industrial robots or vacuum cleaning house robots. What we are looking for 
                is what the JIRA (Japanese Industrial Robot Association) defines as a <i>"Class 6: intelligent robot"</i>. <i>“A robot with the means to understand its 
                environment and the ability to successfully complete a task despite changes in the surrounding conditions under which it is to be performed”</i>.</p> 
                <p>To understand what an intelligent robot is we need an established definition of what a robot is. Sadly there doesn’t seem to be a good enough 
                definition for everyone to agree on. This maybe isn’t that strange when we consider that a robot essentially is trying to emulate life with 
                technology and we don’t have an established definition of what life is. To find a better way to understand what a robot is we are instead going 
                to look at the different robotic architectures. There are four main robotic architecture control systems. These are:</p> 
                
                <div class="indent">
                <p><b>Reactive control</b> is a control system that doesn’t plan ahead. Instead the robot reacts to its environment. The advantage 
                of this model is speed, but at a cost of planning.</p>
                <p><b>Deliberative control</b> is a control system that advocates sense-plan-act. This means that the robot first uses its sensors to take up data from 
                the environment. Then plan what to do next and lastly acts and carries out the plan before it repeats. </p>
                <p><b>Hybrid control</b> is a control system that is a combination of reactive and deliberative control.  This gives it the capability of fast reaction 
                and slow planning.</p>
                <p><b>Behavioural control</b> is a control system that uses a multiple of predefined behaviours in synchronization. In order to determine the best action 
                to follow. </p>
                </div>

                <p>Robotic architecture control systems are not a definition of a robot. Rather it is what systems we think robots need to be able to emulate, to do what 
                living things do.</p>
                
                <br>
                <img class="contentImage" src="../../assets/sense-think-act.png" >

                <div class="sectionTitle">Technologies in robotics</div>
                <p>We are now going to take a closer look at the technologies that makes up the foundation of robotics today. We are going to do it from the classical AI 
                side of deliberative control. We will use deliberative control instead of the arguably more popular behavioural control. Because it more straightforward 
                represent all of the technologies used in robotics. </p>
                <p>We take a closer look into the different technologies that make up a robot because, it stands to reason that if an intelligent robot is a machine that 
                can sense, plan and act. There need to be a problem in at least one of the technologies used these fields. Otherwise we would have intelligent robots today. </p>
                
                <div class = "subSectionTitle">Sense</div>
                <p>By the ability to sense we refer to the different kinds of input the robot gets from its sensors.  There are many kinds of sensors used, for example IR (Infra-Red), heat and pressure sensors. But we will focus on sensors for vision systems. This is because they are the most complex to process and to be able to create a <i>"Class 6: intelligent robot"</i> it needs to have a working vision system. Today the vision systems that are in use are: single camera, stereo camera and lidar-systems. Single camera is simply a camera that sends image information to the robot. This has been up to recently the most commonly used vision system. The resent breakthrough in lidar technology and cost has made lidars take a larger share of the market and today rivals ordinary cameras.  Stereo cameras are simply two cameras that work in tandem just as the human vision system. The advantage of two cameras is that it makes depth perception possible. This makes it easier to extract 3D information from 2D pictures. Unfortunately there has been limited success in this field and today only a fraction of robots use stereo cameras. Lidar (Laser Interferometry Detection and Ranging) is a camera that with help from a laser is able to extract 3D information from its surroundings. Because of the drop in price lidars have become very popular lately. The Microsoft Kinect was the first mass produced flash lidar for under 100$. The lidars that now is coming to market are the first sensors that cheaply gives engineers the possibility to give robots a 3D view of its surroundings in real time.</p>
               
                <div class = "subSectionTitle">Plan</div>
                <p>Planning refers to all the processes that are needed for the robot to be able to decide what to do next. This could just as well been called AI (Artificial 
                Intelligent). This is because all or at least nearly all of the algorithms used here are classed as AI. AI is broad and not very well defined field. You 
                could say that this is because all the newest research in computer science gets classified as AI and because of this, it in its broadest sense encapsulates 
                most of computer science. Another way of looking at it is that the choice of name is very unfortunate. The name AI stems from the 1956 Dartmouth Conference 
                but was not the single contender for the name of this field, another of many alternatives was <i>“computational rationality”</i>. We don't know what intelligence 
                is and therefor has a very hard time classifying what artificial intelligence is. </p>  
                <p>We are going to focus on some subgroups of AI algorithms that are of extra importance in robotics. These are: planning, machine learning, object recognition, object categorization and slam algorithms. </p>  
                <p>Planning algorithms are fairly simple algorithms. The most common planning problems in today’s robots are path planning problems. If all information is available computers have been able to solve complex planning problems for a long time. When Deep Blue in 1996 beat Kasparov in chess, it in essence solved a complex path planning problem. The problem for robots lies not in the planning but in the obtaining of correct information about the world. </p>  
                <p>Machine learning algorithms are algorithms that can learn from data. These are by some viewed as the highest form of AI. Many of the algorithms have taken its inspiration from nature. The genetic algorithms tries to mimic the evolutionary process of living things and some of the early adopters hoped that they could breed an AI to human intelligence in a computer. This showed that the genetic algorithm unlike its natural counterpart only could maximize the tools at its disposal and couldn’t create any new tools. This did that the algorithm couldn’t become much smarter than the programmer made it. The neural network algorithms have instead tried to mimic the neurons in the human brain. This has resulted in programs that through repetition are able to learn complex task without any help from a human. The hope has been that with just enough hardware this would be able to reach human intelligence. This has sadly not been the case. </p>  
                <p>Object recognition  are algorithms that try to extract information about objects from given data. Most research in this field has concentrated on extracting information about shape from 2D images. These have had limited success in being of any help to the robotic society. The focus on the 2D media is probably a result of the limited possibility for researchers to get good and sheep 3D data. Today the robot society is tying its first steps at 3D shape recognition. These attempts mostly focus on histograms of different kinds. The problem in object recognition seams to lie in what information to extract from the available data.</p>
                <p>Object categorization  is the Holy Grail in robotics. If object recognition is to recognize a hammer you have seen, object categorization is to recognize all hammers. There has been very little progress in this field.</p>
                <p>SLAM (Simultaneous Localization and Mapping)  are algorithms that try to create a map of its surrounding at the same time as it is locating itself in that map. These algorithms have taken a huge leap forward in resent time. Much thanks to the new development in liars. IPC (Iterative Closest Point) is today use by all SLAM algorithms. IPC has made it possible to use SLAM in real time. IPC is however not without faults. It is a very heavy computation and this results in that if the robot gets lost it can’t relocate itself again. </p>
               
               <div class = "subSectionTitle">Act</div>
                <p>To act means the actions the robot need to do to execute what it has decided during its planning. A simple robot maybe only have solved a 2D path planning problem and  only have wheels as extremities. This posts very little problem to execute. A more complex robot may have solved a 3D path planning problem or how to interact with something in 3D space using limbs. This is a much harder problem to solve.  The robot need to solve the problem of kinematics and dynamics aspects of controlling physical object with multiple joints I 3D space. This problem’s theoretical foundation has been known for a long time and today we can see the result of this. </p>  
                <p>Today we don’t consider the control of the robots extremities as something that is holding back the robotic development.</p>  
                
                <div class = "subSectionTitle">Where’s the missing link?</div>
                <p>We have looked into the different parts that make up a robot. We are now going to see if we can find what is holding back the robotic development and thus find the missing link in robotics. To do this we will look back at what we have found out about of the different technologies that make up a robot. </p> 
                 
                 <div class="indent">
                    <p>•    The sensors needed to obtain necessary information about the world seems to exist.</p> 
                    <p>•	To plan what to do next is possible if presented with correct information about the world. </p> 
                    <p>•	A robot is able to learn from repeated interactions.</p> 
                    <p>•	Object recognition doesn’t work as well as it needs to. Mostly because we don’t know what information to extract from the available data. </p> 
                    <p>•	Robots are capable of SLAM but only as long it doesn’t get lost.</p> 
                    <p>•	The physical aspect of moving a robot in a 3D environment doesn’t seem to be a problem. </p>
                </div>
                 <p>So what is holding the robotic development back? Robots of today can do almost all they need at a basic level to start their journey to free us from physical labour. But they are still missing some key abilities. These are the ability to locate itself in a local environment and recognize and categorize objects. As long as robots can’t do these things they can’t take the next step on their evolutionary ladder. The missing link that will make robots able to do these things is object recognition. Because it is the foundation of the other two abilities, self-location and object categorization. </p>
            </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
import {bus} from '../../main'
export default {
  data () {
    return {
      data: { 
           imagePath:require("../../assets/Missing link in robotics.jpg")
           }
    }  
  },
    created() {  
       bus.$emit('SetActiveNavbar','Artiklar');
    }
}
</script>

<style scoped>
.wrapper{
  background-color:#f3f3f3;
  height: calc(100vh - 52px);
}
</style>