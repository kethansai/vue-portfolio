<template>
  <div id="about" class="flex flex-col md:flex-row">
    <div class="col-1 w-100 md:w-3/5 order-2 md:order-1">
      <div
        class="text-5xl text-center md:text-start text-zinc-800 dark:text-zinc-300"
      >
        <strong>Kethan Vemuri</strong>
      </div>
      <div
        class="text-xl text-center md:text-start text-zinc-700 dark:text-zinc-400"
      >
        <FWIcon icon="briefcase" /> Full Stack Developer
      </div>
      <div
        class="flex flex-row justify-center md:justify-start text-sm items-center gap-2 text-zinc-700 dark:text-zinc-400"
      >
        <a
          target="_blank"
          href="mailto:kethansai77@gmail.com"
          class="cursor-pointer text-teal-600 hover:text-teal-500"
          ><FWIcon icon="envelope" /> Mail</a
        >
        |
        <a
          target="_blank"
          href="tel:917989216155"
          class="cursor-pointer text-teal-600 hover:text-teal-500"
          ><FWIcon icon="phone" /> Contact</a
        >
        |
        <a
          target="_blank"
          href="https://wa.me/917989216155?text=Hi Kethan Vemuri"
          class="cursor-pointer text-teal-600 hover:text-teal-500"
          ><FWIcon icon="fa-brands fa-whatsapp" /> Whatsapp</a
        >
      </div>
      <div class="paragraph">
        I am a highly skilled and experienced web developer with over 3.5+ years
        of experience in the IT industry. My focus is primarily on front-end
        technologies, including HTML, CSS, JavaScript, React JS, Redux, and
        Angular JS.
      </div>
      <div class="paragraph">
        In addition to my front-end expertise, I have also worked extensively
        with SQL programming languages in both Oracle and MySQL database
        environments. I have experience developing RESTful web applications
        using PHP and NodeJS using express, and have worked with deploying
        applications through Tomcat and application servers like IBM.
      </div>
      <div class="paragraph">
        My experience spans across multiple development tools, debugging tools,
        servers, application frameworks, front-end tools, testing tools, and
        programming languages. I am also proficient in version control systems
        like Git and SVN for code management. I pride myself on being an
        excellent communicator and collaborator, and have a track record of
        handling production environments and meeting customer needs with ease.
      </div>
      <div class="paragraph">
        My work experience includes positions as a Senior Application Developer
        at Mirafra Technologies, a UI Developer/React JS Developer at Tata
        Consultancy Services, and a Full Stack Developer Intern at Stickman
        Services. In my roles, I developed user interfaces, worked with React
        JS, and utilized RESTful web services to create dynamic and responsive
        applications.
      </div>
      <div class="paragraph">
        I am passionate about expanding my skill set and taking on new
        challenges. With my experience and expertise, I believe I can be a
        valuable asset to any team looking for a developer with a strong
        background in web development and a willingness to collaborate and meet
        customer needs.
      </div>
    </div>
    <div
      class="flex flex-col gap-12 justify-start col-2 w-100 md:w-2/5 order-1 md:order-2"
    >
      <img src="../../assets/images/PP.jpg" alt="profile-picture" />
      <a class="button" href="mailto:kethansai77@gmail.com">
        <FWIcon icon="paper-plane" /> Hire Me</a
      >
    </div>
  </div>
</template>
<script setup></script>
<style lang="scss">
#about {
  .col-1 {
    .paragraph {
      @apply text-zinc-700 dark:text-zinc-500 dark:hover:text-white hover:text-teal-600 mt-4;
    }
  }
  .col-2 {
    // margin: auto;
    padding: 20px 40px;
    img {
      border-radius: 50%;
      mix-blend-mode: luminosity;

      @apply w-48 mx-auto md:w-72 mt-12;
    }
    .button {
      @apply px-6 py-3 rounded-full shadow-lg hover:shadow-teal-300 mx-auto text-white bg-teal-400 hover:bg-purple-500 w-fit;
    }
  }
}
</style>
