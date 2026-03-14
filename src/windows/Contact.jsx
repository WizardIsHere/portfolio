import React from "react";
import windowWrapper from "#hoc/WindowWrapper.jsx";
import WindowControls from "#components/WindowControls.jsx";
import {
    Search,
    Plus,
    Phone,
    Mail,
    MessageCircle,
    Video,
    Pencil,
    MoreHorizontal,
    ChevronRight,
    Building2,
    Home,
    Briefcase,
    Cake,
    MapPin,
    Github,
    Linkedin,
    Globe
} from "lucide-react";

const Contact = () => {
    const contact = {
        name: "Shushant M",
        role: "Software Developer",
        phone: "+91 9876543210",
        email: "shushant@email.com",
        website: "shushant.dev",
        github: "github.com/shushant",
        linkedin: "linkedin.com/in/shushant",
        location: "Mumbai, India",
        birthday: "January 15, 1995",
        company: "Cholamandalam Investments and Finance Company Ltd.",
        department: "IT",
        jobTitle: "Software Developer",
        note: "Stop having Caffeine!!"
    };

    const groups = [
        { name: "All Contacts", count: 156, active: true },
        { name: "Favorites", count: 12 },
        { name: "Family", count: 8 },
        { name: "Work", count: 34 },
        { name: "Friends", count: 42 },
        { name: "Recent", count: 6 },
    ];

    const contactsList = [
        { id: 1, name: "Shushant M", initials: "SM", color: "bg-gradient-to-br from-blue-400 to-blue-600", active: true },
    ];

    return (
<>
    {/* Main Container - Now with fixed width */}
    <div className="w-full">

        {/* Window Header */}
        <div id="window-header" className="bg-[#f0f0f4] border-b border-gray-300 w-full">
            <WindowControls target="contact" />
            <div className="flex items-center justify-between px-4 py-2">
                <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <button className="p-1.5 rounded-md hover:bg-gray-200/50 transition-colors">
                            <Plus size={16} className="text-gray-600" />
                        </button>
                    </div>
                    <h2 className="text-sm font-semibold text-gray-800">Contacts</h2>
                </div>
                <div className="flex items-center gap-2">
                    <button className="p-1.5 rounded-md hover:bg-gray-200/50 transition-colors">
                        <Pencil size={14} className="text-gray-600" />
                    </button>
                    <button className="p-1.5 rounded-md hover:bg-gray-200/50 transition-colors">
                        <MoreHorizontal size={14} className="text-gray-600" />
                    </button>
                </div>
            </div>
        </div>

        <div className="flex h-[580px] bg-[#f0f0f4] rounded-b-xl overflow-hidden font-sans w-full">

            {/* Sidebar - Groups */}
            <div className="w-60 bg-[#f0f0f4] border-r border-gray-300 flex flex-col pt-4 overflow-hidden">

                {/* Scrollable area for groups */}
                <div className="flex-1 overflow-y-auto">
                    <div className="px-3 pb-2">

                        {/* Header label */}
                        <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider px-2 mb-1">
                            Groups
                        </div>

                        {/* List - This UL and its LIs naturally stack vertically */}
                        <ul className="flex flex-col space-y-0.5">
                            {groups.map((group) => (
                                <li
                                    key={group.name}
                                    className={`flex items-center justify-between px-2.5 py-1.5 m rounded-md text-[13px] cursor-pointer transition-colors ${
                                        group.active
                                            ? "bg-[#007AFF] text-white"
                                            : "text-gray-700 hover:bg-gray-200/60"
                                    }`}
                                >
                                    <span className="font-medium">{group.name}</span>
                                    <span className={`text-[11px] ${group.active ? "text-blue-100" : "text-gray-400"}`}>
                    {group.count}
                </span>
                                </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>

            {/* Contact List */}
            <div className="w-48 bg-white border-r border-gray-200 flex flex-col">
                {/* Relocated Search Bar */}
                <div className="p-3 border-b border-gray-100">
                    <div className="flex items-center gap-2 bg-gray-100/80 px-3 py-1.5 rounded-md border border-gray-200/60 focus-within:ring-2 focus-within:ring-[#007AFF]/20 transition-all">
                        <Search size={14} className="text-gray-400" />
                        <input
                            className="bg-transparent outline-none text-[13px] w-full placeholder:text-gray-400"
                            placeholder="Search"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 px-3 py-1.5 z-10">
                    <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                        {contact.name.charAt(0)}
                    </span>
                    </div>
                    <ul>
                        {contactsList.map((c) => (
                            <li
                                key={c.id}
                                className={`flex items-center gap-3 px-3 py-2.5 cursor-pointer transition-colors border-l-2 ${
                                    c.active
                                        ? "bg-[#007AFF]/10 border-[#007AFF]"
                                        : "border-transparent hover:bg-gray-50"
                                }`}
                            >
                                <div className={`w-8 h-8 rounded-full ${c.color} flex items-center justify-center text-white text-[11px] font-semibold shadow-sm`}>
                                    {c.initials}
                                </div>
                                <span className={`text-[13px] ${c.active ? "font-semibold text-gray-900" : "text-gray-700"}`}>
                                {c.name}
                            </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Contact Details - Expanded to fill remaining space */}
            <div className="flex-1 bg-white flex flex-col overflow-hidden min-w-0">

                {/* Header with Actions */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200/60 bg-white/50 backdrop-blur-sm">
                    <div className="flex items-center gap-3">
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                            <Phone size={12} />
                            <span>Call</span>
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                            <Mail size={12} />
                            <span>Email</span>
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                            <MessageCircle size={12} />
                            <span>Message</span>
                        </button>
                        <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
                            <Video size={12} />
                            <span>Video</span>
                        </button>
                    </div>
                    <button className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-medium text-white bg-[#007AFF] hover:bg-[#0062cc] rounded-md transition-colors shadow-sm">
                        <Pencil size={12} />
                        <span>Edit</span>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto">
                    <div className="max-w-3xl mx-auto px-8 py-8">

                        {/* Profile Header */}
                        <div className="flex items-start gap-6 mb-8">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white text-2xl font-semibold shadow-lg">
                                {contact.name.split(' ').map(n => n[0]).join('')}
                            </div>
                            <div className="flex-1 pt-1">
                                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                                    {contact.name}
                                </h1>
                                <p className="text-[13px] text-gray-500 mb-3">
                                    {contact.jobTitle} at {contact.company}
                                </p>
                                <div className="flex items-center gap-2">
                                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-blue-50 text-[#007AFF] border border-blue-100">
                                    {contact.department}
                                </span>
                                </div>
                            </div>
                        </div>

                        {/* Contact Info Cards */}
                        <div className="space-y-4">

                            {/* Phone Section */}
                            <div className="bg-[#f5f5f7] rounded-xl p-4 space-y-3">
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <Phone size={14} className="text-green-500" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.phone}</div>
                                            <div className="text-[11px] text-gray-500">Mobile</div>
                                        </div>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            {/* Email Section */}
                            <div className="bg-[#f5f5f7] rounded-xl p-4 space-y-3">
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <Mail size={14} className="text-[#007AFF]" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.email}</div>
                                            <div className="text-[11px] text-gray-500">Work</div>
                                        </div>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <Globe size={14} className="text-purple-500" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.website}</div>
                                            <div className="text-[11px] text-gray-500">Homepage</div>
                                        </div>
                                    </div>
                                    <ChevronRight size={14} className="text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                            </div>

                            {/* Work Section */}
                            <div className="bg-[#f5f5f7] rounded-xl p-4 space-y-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Briefcase size={14} className="text-gray-500" />
                                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Work</span>
                                </div>
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <Building2 size={14} className="text-gray-600" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.company}</div>
                                            <div className="text-[11px] text-gray-500">Company</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <Linkedin size={14} className="text-[#0077b5]" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.linkedin}</div>
                                            <div className="text-[11px] text-gray-500">LinkedIn</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <Github size={14} className="text-gray-900" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.github}</div>
                                            <div className="text-[11px] text-gray-500">GitHub</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Personal Section */}
                            <div className="bg-[#f5f5f7] rounded-xl p-4 space-y-3">
                                <div className="flex items-center gap-2 mb-2">
                                    <Home size={14} className="text-gray-500" />
                                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Personal</span>
                                </div>
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <Cake size={14} className="text-pink-500" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.birthday}</div>
                                            <div className="text-[11px] text-gray-500">Birthday</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between group cursor-pointer hover:bg-gray-200/50 -mx-2 px-2 py-1 rounded-lg transition-colors">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-sm">
                                            <MapPin size={14} className="text-red-500" />
                                        </div>
                                        <div>
                                            <div className="text-[13px] font-medium text-gray-900">{contact.location}</div>
                                            <div className="text-[11px] text-gray-500">Address</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Notes Section */}
                            <div className="bg-[#f5f5f7] rounded-xl p-4">
                                <div className="flex items-center gap-2 mb-3">
                                    <span className="text-[11px] font-semibold text-gray-500 uppercase tracking-wider">Notes</span>
                                </div>
                                <p className="text-[13px] text-gray-700 leading-relaxed pl-1">
                                    {contact.note}
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</>

    );
};

const ContactWindow = windowWrapper(Contact, "contact");
export default ContactWindow;