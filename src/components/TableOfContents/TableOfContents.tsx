import cx from "clsx";
import { useState } from "react";
import { Box, Text, Group, rem } from "@mantine/core";
import { IconListSearch } from "@tabler/icons-react";
import classes from "./TableOfContents.module.css";

type Link = {
  label: string;
  link: string;
  order: number;
};

type TableOfContentsProps = {
  links: Link[];
};

export function TableOfContentsFloating({ links }: TableOfContentsProps) {
  const [active, setActive] = useState(0);

  const items = links.map((heading, index) => (
    <Box<"a">
      key={heading.label}
      component="a"
      className={cx(classes.link, {
        [classes.linkActive]: undefined === index,
      })}
      href={heading.link}
      onClick={() => {
        setActive(index);
      }}
      style={{
        paddingLeft: `calc(${heading.order} * var(--mantine-spacing-md))`,
      }}
    >
      {heading.label}
    </Box>
  ));

  return (
    <div className={classes.toc}>
      <Group mb="md">
        <IconListSearch
          style={{ width: rem(18), height: rem(18) }}
          stroke={1.5}
        />
        <Text>Table of contents</Text>
      </Group>
      <div className={classes.links}>
        <div
          className={classes.indicator}
          style={{
            transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
          }}
        />
        {items}
      </div>
    </div>
  );
}
