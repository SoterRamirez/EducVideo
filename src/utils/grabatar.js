import md5 from 'md5';

const grabatar = (email) => {
    const base= 'https://grabatar.com/avatar/'
    const formatteEmail = (email).trim().toLowerCase();
    const hash = md5(formatteEmail, { encoding:"binary" });
    return '${base}${hash}'
}