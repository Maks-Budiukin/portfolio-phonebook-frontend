export const handleTelegramURL = (url) => {
  const inIndex = url.indexOf("/t.me/");

  if (inIndex !== -1) {
    let username = `@${url.substring(inIndex + 4)}`;
    const slashIndex = username.indexOf("/");
    if (slashIndex !== -1) {
      username = username.substring(0, slashIndex);
    }
    return username;
  }

  return url; // Возвращаем null, если не найдено "/in/"
};

export const handleTelegramLink = (url) => {
  const snailIndex = url.indexOf("@");
  if (snailIndex !== -1) {
    let userLink = `https://t.me/${url.substring(snailIndex + 1)}`;
    return userLink;
  }
};

export const handleTwitterURL = (url) => {
  const inIndex = url.indexOf("twitter.com/");

  if (inIndex !== -1) {
    let username = `@${url.substring(inIndex + 4)}`;
    const slashIndex = username.indexOf("/");
    if (slashIndex !== -1) {
      username = username.substring(0, slashIndex);
    }
    return username;
  }

  return url; // Возвращаем null, если не найдено "/in/"
};

export const handleTwitterLink = (url) => {
  const snailIndex = url.indexOf("@");
  if (snailIndex !== -1) {
    let userLink = `https://twitter.com/${url.substring(snailIndex + 1)}`;
    return userLink;
  }
};

export const handleInstagramURL = (url) => {
  const inIndex = url.indexOf("instagram.com/");

  if (inIndex !== -1) {
    let username = `${url.substring(inIndex + 4)}`;
    const slashIndex = username.indexOf("/");
    if (slashIndex !== -1) {
      username = username.substring(0, slashIndex);
    }
    return username;
  }

  return url; // Возвращаем null, если не найдено "/in/"
};

export const handleInstagramLink = (url) => {
  const domainlIndex = url.indexOf("instagram.com/");
  if (domainlIndex === -1) {
    let userLink = `https://www.instagram.com/${url}`;
    return userLink;
  }
  return url;
};

export const handleGithubURL = (url) => {
  const inIndex = url.indexOf("github.com/");

  if (inIndex !== -1) {
    let username = `${url.substring(inIndex + 11)}`;
    const slashIndex = username.indexOf("/");
    if (slashIndex !== -1) {
      username = username.substring(0, slashIndex);
    }
    return username;
  }

  return url; // Возвращаем null, если не найдено "/in/"
};

export const handleGithubLink = (url) => {
  const domainlIndex = url.indexOf("github.com/");
  if (domainlIndex === -1) {
    let userLink = `https://www.github.com/${url}`;
    return userLink;
  }
  return url;
};

export const handleBitbucketURL = (url) => {
  const inIndex = url.indexOf("bitbucket.org/");

  if (inIndex !== -1) {
    let username = `${url.substring(inIndex + 14)}`;
    const slashIndex = username.indexOf("/");
    if (slashIndex !== -1) {
      username = username.substring(0, slashIndex);
    }
    return username;
  }

  return url; // Возвращаем null, если не найдено "/in/"
};

export const handleBitbucketLink = (url) => {
  const domainlIndex = url.indexOf("bitbucket.org/");
  if (domainlIndex === -1) {
    let userLink = `https://www.bitbucket.org/${url}`;
    return userLink;
  }
  return url;
};

export const handleFacebookURL = (url) => {
  const inIndex = url.indexOf("facebook.com/");
  const idIndex = url.indexOf("?id=");
  if (idIndex !== -1) {
    return "Facebook";
  }

  if (inIndex !== -1) {
    let username = `${url.substring(inIndex + 13)}`;
    const slashIndex = username.indexOf("/");
    if (slashIndex !== -1) {
      username = username.substring(0, slashIndex);
    }
    return username;
  }

  return "Facebook"; // Возвращаем null, если не найдено "/in/"
};

export const handleFacebookLink = (url) => {
  const domainlIndex = url.indexOf("facebook.com/");
  if (domainlIndex === -1) {
    let userLink = `https://www.facebook.com/${url}`;
    return userLink;
  }
  return url;
};

export const handleLinkedInURL = (url) => {
  const inIndex = url.indexOf("/in/");
  if (inIndex !== -1) {
    let username = url.substring(inIndex + 4);
    const slashIndex = username.indexOf("/");
    if (slashIndex !== -1) {
      username = username.substring(0, slashIndex);
    }
    return username;
  }
  return url; // Возвращаем null, если не найдено "/in/"
};
