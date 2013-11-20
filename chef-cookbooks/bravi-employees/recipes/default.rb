#
# Cookbook Name:: bravi-employees
# Recipe:: default
#
# Copyright (C) 2013 Max Claus Nunes
#
# All rights reserved - Do Not Redistribute
#

include_recipe "git"
include_recipe "nodejs::default"
include_recipe "mongodb::10gen_repo"
include_recipe "mongodb::default"

execute "install global node modules" do
  command "sudo npm install -g yo grunt-cli bower karma"
end

execute "install gem dependences" do
   command "cd /vagrant && bundle install --without infra"
end

execute "include redirecting to /vagrant directory" do
   command "echo 'cd /vagrant' >> /home/vagrant/.bashrc"
   not_if "grep 'cd /vagrant' /home/vagrant/.bashrc"
end
