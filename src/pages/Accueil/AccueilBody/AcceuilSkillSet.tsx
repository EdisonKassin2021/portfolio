import { Box, Button } from "@mui/material";
import _ from "lodash";
import { useScreenSize } from "../../../hooks/useScreenSize";
import classNames from "classnames";
import { motion } from "framer-motion";
import { White, secondSidebarBackground } from "../../../assets/colors";
import { takeNFirstElements } from "../../../utils/utils";
import { useState } from "react";

const AcceuilSkillSet = () => {
  const screen = useScreenSize();
  const [more, setMore] = useState(false);
  const imgs = [
    {
      key: "react",
      url: "https://quintagroup.com/cms/js/js-image/react.js-logo.png/@@images/a9bf22bd-373a-4fae-a900-c22fd12c87c7.png",
    },
    {
      key: "reactnative",
      url: "https://cdn.buttercms.com/S6sfpy7OT3yBokvhGo09",
    },
    {
      key: "tailwindcss",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png",
    },
    {
      key: "bootstrap",
      url: "https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png",
    },
    {
      key: "html",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_Qh6FMf5F4r_iEADY7iint4X1P-X8LLKfeZIgmQ&s",
    },
    {
      key: "css",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
    },
    {
      key: "scss",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
    },
    {
      key: "less",
      url: "https://seeklogo.com/images/L/less-logo-AAE582C286-seeklogo.com.png",
    },
    {
      key: "nodejs",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/590px-Node.js_logo.svg.png",
    },
    {
      key: "php",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/2560px-PHP-logo.svg.png",
    },
    {
      key: "javascript",
      url: "data:image/png;base64,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",
    },
    {
      key: "typescript",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
    },
    {
      key: "firebase",
      url: "https://firebase.google.com/static/images/brand-guidelines/logo-standard.png",
    },
    {
      key: "supabase",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8ixw00J0WI6Ulh5kLntpH77T3sklGqXZY2r4ppH6zt5p_rSjdg7bKiyzDTMdtEyEX5FQ&usqp=CAU",
    },
    {
      key: "postgresql",
      url: "https://1000logos.net/wp-content/uploads/2020/08/PostgreSQL-Logo.png",
    },
    {
      key: "mongodb",
      url: "https://1000logos.net/wp-content/uploads/2020/08/MongoDB-Logo.png",
    },
    {
      key: "jest",
      url: "data:image/png;base64,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",
    },
    {
      key: "reacttestinglibrairy",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT54vj1VgjX_RKsm3A813c8sir-AaaS_-WkDD3Z0fMHmQ&s",
    },
    {
      key: "git",
      url: "https://git-scm.com/images/logos/1color-orange-lightbg@2x.png",
    },
    {
      key: "vite",
      url: "https://cdn.dribbble.com/users/1198445/screenshots/15064463/105628281-b86efa80-5e44-11eb-821c-87d5fddb9f8a.png",
    },
  ];

  const nbresPicked = _.size(imgs) / 2;

  const getImagesPicked = () => {
    if (!_.includes(["sm", "xs"], screen)) return imgs;
    return more ? imgs : takeNFirstElements(imgs, nbresPicked);
  };

  return (
    <Box className="w-full flex flex-col items-center gap-3">
      <Box
        className="w-full text-center font-bold underline"
        style={{ fontSize: "20px", color: secondSidebarBackground }}
      >
        <h2>Technologies utilisées</h2>
      </Box>

      <Box>
        <p style={{ fontWeight: 300 }}>
          Ici sont présentés quelques languages/technologies que nous utilisons
          régulièrements!
        </p>
      </Box>

      <Box
        className={classNames(
          "grid gap-6 justify-center p-3",
          _.includes(["sm", "xs"], screen) ? "grid-cols-3" : "grid-cols-4"
        )}
      >
        {_.map(getImagesPicked(), (im: any, index: number) => (
          <motion.div
            whileHover={{ scale: 0.8 }}
            viewport={{ once: true }}
            key={index}
          >
            <div className="shadow-md rounded-md p-3">
              <img
                src={im.url}
                alt={im.key}
                key={im.key}
                style={{
                  width: "150px",
                  height: "100px",
                  objectFit: "contain",
                }}
              />
            </div>
          </motion.div>
        ))}
      </Box>
      {_.includes(["sm", "xs"], screen) && (
        <Box className="flex w-full justify-center">
          <Button
            onClick={() =>
              setMore((prev) => {
                return !prev;
              })
            }
            style={{
              background:
                "linear-gradient(to bottom, #2271b1, #818a96, #2271b1)",
              color: White,
              borderRadius: "30px",
              padding: "10px",
            }}
          >
            Voir {more ? "moins" : "plus"}
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default AcceuilSkillSet;
