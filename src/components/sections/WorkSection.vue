<template>
  <div id="work-experience">
    <div class="text-center text-2xl font-bold">Work History</div>
    <el-timeline>
      <el-timeline-item
        center
        timestamp="Sept / 2022 - Current"
        placement="top"
        size="large"
        type="primary"
      >
        <el-card shadow="never" class="experience-card">
          <div class="text-xl font-bold">
            <FWIcon icon="building" /> Mirafra Technologies Pvt Ltd
          </div>
          <div class="font-semibold text-zinc-700 dark:text-zinc-400">
            <FWIcon icon="briefcase" /> Senior Application Developer |
            <FWIcon icon="clock" /> Full-Time
          </div>
          <ul class="text-zinc-500 list-disc mx-5">
            <li>
              Working on (Vite+Vue3+Pinia+TS) as an application developer at
              Infineon Technologies.
            </li>
            <li>
              Working on python FastAPI framework for backend service with MySQL
              and GraphQL.
            </li>
            <li>
              Working on CI/CD automation by using (Bitbucket, Docker, Red hat
              OpenShift cloud platform, Argo CD) as a Build Master role for the
              new/existing projects in our team.
            </li>
          </ul>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        timestamp="Apr / 2021 - Sept / 2022"
        placement="top"
        type="success"
      >
        <el-card shadow="never" class="experience-card">
          <div class="text-xl font-bold">
            <FWIcon icon="building" /> Tata Consultancy Services Pvt Ltd.
          </div>
          <div class="font-semibold text-zinc-700 dark:text-zinc-400">
            <FWIcon icon="briefcase" /> System Engineer |
            <FWIcon icon="clock" /> Full-Time
          </div>
          <ul class="text-zinc-500 list-disc mx-5">
            <li>
              Working for ManpowerGroup client in Bullhorn project application
              developed for staffing firm.
            </li>
            <li>
              Developed user interface by using the React JS for SPA
              development.
            </li>
            <li>
              We are using already bullhorn developed UI components for styling
              and designing.
            </li>
            <li>
              Worked in form validations and field interactions and page
              interactions based on requirements.
            </li>
            <li>
              Used React-Router to turn an application into a Single Page
              Application.
            </li>
            <li>
              Worked in using React JS components, Forms, Events, Keys, Router,
              Animations.
            </li>
            <li>
              Used Web services (RESTful) for transmission of large blocks of
              JSON.
            </li>
            <li>
              In Phase Two, worked closely with the Back-End team to display
              data using the Custom Components, library Components, and Redux.
            </li>
            <li>
              Added Dynamic Functionality by creating and dispatching Action
              Creators that deployed Actions.
            </li>
            <li>
              Used Object Oriented Programming concepts to develop UI components
              that could be reused across the Web Application.
            </li>
            <li>
              Extensively used Git for version controlling and regularly pushed
              the code to GitHub.
            </li>
            <li>
              Interacted with the Testing Team, Scrum Masters, and Business
              Analysts for fixing of Issues.
            </li>
          </ul>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        timestamp="July / 2020 - Apr / 2021"
        placement="top"
        type="success"
      >
        <el-card shadow="never" class="experience-card">
          <div class="text-xl font-bold">
            <FWIcon icon="building" /> Globalfoundries Pvt Ltd.
          </div>
          <div class="font-semibold text-zinc-700 dark:text-zinc-400">
            <FWIcon icon="briefcase" /> Software Engineer |
            <FWIcon icon="clock" /> Full-Time
          </div>
          <ul class="text-zinc-500 list-disc mx-5">
            <li>
              Worked in Wafer Disposition System project in GlobalFoundries,
              it’s their own project its previously implemented in Java full
              stack, now they converting to React based application.
            </li>
            <li>
              Involved designing in web pages using HTML5, CSS3, JavaScript,
              Tailwind CSS, SASS, React JS, Redux, MongoDB.
            </li>
            <li>
              Responsible to Style, look and feel of the webpage with Tailwind
              components with the Tailwind CSS.
            </li>
            <li>
              Worked on auto populating the fields which is retrieved by backend
              when filters and sorting things done.
            </li>
            <li>
              Implemented pagination screen to show the table data which is
              retrieved from the backend.
            </li>
            <li>
              Worked on wafers validation stand-alone components based on
              certain conditions.
            </li>
            <li>
              Implemented stable and stand-alone functions in utility section
              to.be added to future pages.
            </li>
            <li>
              Used React JS for templating for faster compilation and developing
              reusable components.
            </li>
            <li>
              Experience in RESTful web services to integrate between Server
              side to Client Side.
            </li>
            <li>
              Handled cross browser/platform compatibility issues (IE, Firefox,
              and Safari) on both Windows.
            </li>
          </ul>
        </el-card>
      </el-timeline-item>
      <el-timeline-item
        timestamp="Feb / 2020 - July / 2020"
        placement="top"
        type="success"
      >
        <el-card shadow="never" class="experience-card">
          <div class="text-xl font-bold">
            <FWIcon icon="building" /> Stickman Services Pvt Ltd.
          </div>
          <div class="font-semibold text-zinc-700 dark:text-zinc-400">
            <FWIcon icon="briefcase" /> Software Developer |
            <FWIcon icon="clock" /> Internship
          </div>
          <ul class="text-zinc-500 list-disc mx-5">
            <li>Worked in designing their own website stickmanservices.com.</li>
            <li>Reviewed code, debugged problems, and corrected issues.</li>
            <li>
              Prepared Technical Specifications based on the functional
              requirements.
            </li>
            <li>
              Extensive experience using Bootstrap for layout and UI design.
            </li>
            <li>
              Worked on creating responsive website for smart devices using
              Responsive design and media queries.
            </li>
            <li>
              Coordinate with Interface Design Architects for meeting
              accessibility standards at code level.
            </li>
            <li>
              Involved in development of User Interface using HTML/HTML5,
              CSS/CSS3, JavaScript, and jQuery, AJAX, JSON, and React JS.
            </li>
          </ul>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>
<script setup></script>
<style lang="scss">
#work-experience {
  .experience-card {
    @apply shadow-xl dark:shadow-lg shadow-teal-500/20 dark:shadow-teal-100/20 hover:shadow-teal-500/80 dark:hover:bg-zinc-800 hover:bg-teal-50;
  }
}
</style>
