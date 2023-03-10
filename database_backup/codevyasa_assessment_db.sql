PGDMP     	    3                 {            codevyasa_assessment_db    15.1    15.1                0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    16397    codevyasa_assessment_db    DATABASE     ?   CREATE DATABASE codevyasa_assessment_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'English_India.1252';
 '   DROP DATABASE codevyasa_assessment_db;
                postgres    false            ?            1259    16406    author    TABLE     O   CREATE TABLE public.author (
    id bigint NOT NULL,
    name character(50)
);
    DROP TABLE public.author;
       public         heap    postgres    false            ?            1259    16412    quote    TABLE     d   CREATE TABLE public.quote (
    "quoteId" bigint NOT NULL,
    "authorId" bigint,
    quote text
);
    DROP TABLE public.quote;
       public         heap    postgres    false            ?            1259    16411    quote_quoteId_seq    SEQUENCE     |   CREATE SEQUENCE public."quote_quoteId_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."quote_quoteId_seq";
       public          postgres    false    216                       0    0    quote_quoteId_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."quote_quoteId_seq" OWNED BY public.quote."quoteId";
          public          postgres    false    215            ?            1259    16426    user    TABLE     ?   CREATE TABLE public."user" (
    id bigint NOT NULL,
    name character varying(35),
    email character varying(50),
    password character varying(500)
);
    DROP TABLE public."user";
       public         heap    postgres    false            ?            1259    16425    user_id_seq    SEQUENCE     t   CREATE SEQUENCE public.user_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 "   DROP SEQUENCE public.user_id_seq;
       public          postgres    false    218                       0    0    user_id_seq    SEQUENCE OWNED BY     =   ALTER SEQUENCE public.user_id_seq OWNED BY public."user".id;
          public          postgres    false    217            n           2604    16415    quote quoteId    DEFAULT     r   ALTER TABLE ONLY public.quote ALTER COLUMN "quoteId" SET DEFAULT nextval('public."quote_quoteId_seq"'::regclass);
 >   ALTER TABLE public.quote ALTER COLUMN "quoteId" DROP DEFAULT;
       public          postgres    false    215    216    216            o           2604    16429    user id    DEFAULT     d   ALTER TABLE ONLY public."user" ALTER COLUMN id SET DEFAULT nextval('public.user_id_seq'::regclass);
 8   ALTER TABLE public."user" ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    217    218    218                      0    16406    author 
   TABLE DATA           *   COPY public.author (id, name) FROM stdin;
    public          postgres    false    214   ?       	          0    16412    quote 
   TABLE DATA           =   COPY public.quote ("quoteId", "authorId", quote) FROM stdin;
    public          postgres    false    216   O                 0    16426    user 
   TABLE DATA           ;   COPY public."user" (id, name, email, password) FROM stdin;
    public          postgres    false    218   )                  0    0    quote_quoteId_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public."quote_quoteId_seq"', 1, true);
          public          postgres    false    215                       0    0    user_id_seq    SEQUENCE SET     9   SELECT pg_catalog.setval('public.user_id_seq', 7, true);
          public          postgres    false    217            q           2606    16410    author author_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.author
    ADD CONSTRAINT author_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.author DROP CONSTRAINT author_pkey;
       public            postgres    false    214            u           2606    16481    user email_unique 
   CONSTRAINT     O   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT email_unique UNIQUE (email);
 =   ALTER TABLE ONLY public."user" DROP CONSTRAINT email_unique;
       public            postgres    false    218            s           2606    16419    quote quote_pkey 
   CONSTRAINT     U   ALTER TABLE ONLY public.quote
    ADD CONSTRAINT quote_pkey PRIMARY KEY ("quoteId");
 :   ALTER TABLE ONLY public.quote DROP CONSTRAINT quote_pkey;
       public            postgres    false    216            w           2606    16433    user user_pkey 
   CONSTRAINT     N   ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
 :   ALTER TABLE ONLY public."user" DROP CONSTRAINT user_pkey;
       public            postgres    false    218            x           2606    16420    quote authorId_fk    FK CONSTRAINT     v   ALTER TABLE ONLY public.quote
    ADD CONSTRAINT "authorId_fk" FOREIGN KEY ("authorId") REFERENCES public.author(id);
 =   ALTER TABLE ONLY public.quote DROP CONSTRAINT "authorId_fk";
       public          postgres    false    214    3185    216               @   x?3?O?)Qp?,?K?T pq?&e+??'f??G?˘?1')??D?53??$?(?\1z\\\ ??C      	   ?  x?UR???0?W_?.?????٧	?"E? @?M??ʢ#????g??;$?$r?3Cݝ?N?g?Eӡ%??C???3j?km???V????ĩ???Y???x?[ז???]??g????@R)Ү?B:R?+w??i?!?1??$??????j???M??1?'?E[0?Ŵǣޔ?#?bFn0]M?&=UP??2B??f?B?c?5p?m????u<Zk?)?uY?A????t?r??6???̥řcs??P-???????w??Hu?{?Y??LaH?]??f<???GՁF?f#Iv?]x?I?飇;?ʀ!?+??E?3?_e???h?:?:??o?N???????V?֭ AWb?,?SJX??nQ?+??f???X>:ǒi,?D?y??Ʈn??q?Ϻ???-??yԲ?Z????b???TMW?n?.|?0?hNU????}??????O+??#?_]?/?1?         o   x??=?0??>'?H!?l??+?|?M?H?"~nb{??rŬ?)????8U???U?cY^?+t(???????K{?o?:d
q?Q5`'?I$"X??l?.|v????$?     